/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.thehousedesigners.com"], 
  },
  async redirects(){
    return [
      {
        source:'/',
        destination: '/home',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
