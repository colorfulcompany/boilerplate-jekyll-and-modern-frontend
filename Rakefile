desc 'serve'
task :serve do
  sh 'jekyll serve -s src'
end

desc 'build'
task :build do
  sh <<EOD
NODE_ENV=production yarn run rollup -c
yarn run build:css
JEKYLL_ENV=production jekyll build -s src
EOD
end
