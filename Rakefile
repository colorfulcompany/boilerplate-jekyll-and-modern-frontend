desc 'serve'
task :serve do
  sh 'jekyll serve -s src'
end

desc 'build'
task :build do
  sh <<EOD
yarn run rollup -c
jekyll build -s src
EOD
end
