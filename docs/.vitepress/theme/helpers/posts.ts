
import path from "path"
import matter from 'gray-matter'
import fs from "fs-extra"
import {globby} from 'globby'

export async function allPosts() {
    // let paths = getPostMDFilePaths()
    // console.log(paths)
    console.log(globby);
    
}

async function getPostMDFilePaths() {
    let paths = await globby(["**.md"], {
        ignoreFiles: ["node_modules", "README.md"],
    });
    return paths.filter((item) => item.includes("posts/"));
  }