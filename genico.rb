file = ARGV[0]
output = ARGV[1]

images = [ 195, 152, 144, 128, 120, 114, 96, 72, 64, 57, 48, 32, 24, 16 ]

images.each { |x| 
  system( "convert #{file} -resize #{x}x#{x} #{output}/favicon-#{x}.png" )
  system( "optipng -o7 #{output}/favicon-#{x}.png" )
}

system ( "cd #{output}/ && convert favicon-16.png favicon-24.png favicon-32.png favicon-48.png favicon-64.png favicon.ico" )