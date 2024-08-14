"use server";

import fs from "fs";
import path from "path";

const save = async (image: string) => {
  const publicFolderPath = path.join(process.cwd(), "src/public");
  if (!fs.existsSync(publicFolderPath)) {
    await fs.promises.mkdir(publicFolderPath);
  }

  const filePath = path.join(
    publicFolderPath,
    `${Math.random()}asdfasdf${Math.random()}.jpeg`,
  );

  const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  await fs.promises.writeFile(filePath, buffer);
  console.log("Dummy file created successfully");
};

export default save;
