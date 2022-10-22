import globby from "globby";
import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";

export async function getPosts() {
  let paths = await getPostMDFilePaths();
  let postsAll = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, "utf-8");
      const { data } = matter(content);
      if (data.draft) {
        return null;
      }
      data.date = _convertDate(data.date);
      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html")}`,
      };
    })
  );

  let posts = await Promise.all(
    postsAll.filter(item => item != null)
  );

  posts.sort(_compareDate);
  return posts;
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON();
  return json_date.split("T")[0];
}

function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"],
  });
  return paths.filter((item) => item.includes("posts/"));
}

export async function getPostLength() {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length;
}

export async function getCollections(): Array<Collection> {
  let posts = await getPosts()
  let collections: Array<Collection> = []

  for (const p of posts) {
    let cnames = collections.map(item => item.name)
    let index = cnames.indexOf(p.frontMatter.collection)
    if (index > -1) {
      let c = collections.at(index)
      c.count += 1
    } else {
      let c: Collection = {
        name: p.frontMatter.collection,
        count: 1
      }
      collections.push(c)
    }
  }

  collections.sort(_comparePostCount)

  return collections
}

export async function getTags(): Array<Tag> {
  let posts = await getPosts()
  let tags: Array<Tag> = []

  posts.map((p) => {
    if (p.frontMatter.tags != null) {
      let tnames = tags.map(item => item.name)
      let ptags = p.frontMatter.tags
      ptags.map((pt) => {
        let index = tnames.indexOf(pt)
        if (index > -1) {
          tags.at(index).count += 1
        } else {
          let t: Tag = {
            name: pt,
            count: 1
          }
          tags.push(t)
        }
      })
    }
  })
  
  tags.sort(_comparePostCount)

  return tags
}

function _comparePostCount(obj1, obj2) {
  return obj1.count < obj2.count ? 1 : -1;
}

interface Collection {
  name: String,
  count: Number,
}

interface Tag {
  naem: String,
  count: Number
}