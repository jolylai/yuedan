## dva项目打包推送到gh-pages
```
// .roadhog
// jolylai.github.io/publicPath/
"publicPath": "/仓库名/"

// 通过git将项目推送到gh-pages
git subtree push --prefix=dist origin gh-pages
```