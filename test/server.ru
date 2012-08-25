ROOT = File.expand_path("../../", __FILE__)

STDOUT.puts "-- Serving: #{ROOT}"
run Rack::Directory.new(ROOT)
