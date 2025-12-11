export interface FileSystemItem {
  name: string;
  type: "folder" | "file";
  children?: FileSystemItem[]; //recursion
}
export const data: FileSystemItem = {
  name: "Root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Users.tsx", type: "file" },
            { name: "Dashboard.tsx", type: "file" },
          ],
        },
        { name: "App.tsx", type: "file" },
        { name: "index.css", type: "file" },
      ],
    },
    {
      name: "package.json",
      type: "file",
    },
    {
      name: "README.md",
      type: "file",
    },
  ],
};