desc 'serve'
task :serve do
  sh 'jekyll serve -s src'
end

desc 'build'
task :build do
  sh <<EOD
yarn run build
JEKYLL_ENV=production jekyll build -s src
yarn run minify-html
EOD
end
