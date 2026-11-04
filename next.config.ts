import type { NextConfig } from "next";

const repoName = "YOUR_REPO_NAME";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // For a project site: https://USERNAME.github.io/REPO_NAME
  // For a user site named USERNAME.github.io, set repoName to "".
  basePath: process.env.NODE_ENV === "production" && repoName !== "YOUR_REPO_NAME"
    ? `/${repoName}`
    : process.env.NODE_ENV === "production" && repoName === "YOUR_REPO_NAME"
      ? "/YOUR_REPO_NAME"
      : "",
};

export default nextConfig;
