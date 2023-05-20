import { cteLibrary } from "./lib/cteLibrary"
import { writeFile } from "fs"

const json = JSON.stringify(cteLibrary)

writeFile("cteLibrary.json", json, "utf8", (err: any) => {
  if (err) {
    console.log(err)
    return
  }
  console.log("Success")
})
