/** @type {import('next').NextConfig} */
const nextConfig = {
    //图片用到了百度服务器的图片，需要使用来配置一下避免出错
    images: {
        domains: ['localhost','t7.baidu.com','10.0.0.118'],
    }
}

module.exports = nextConfig;