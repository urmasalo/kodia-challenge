import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.wired.com' },
      { protocol: 'https', hostname: 'ichef.bbci.co.uk' },
      { protocol: 'https', hostname: 'static.foxnews.com' },
      { protocol: 'https', hostname: 'media.cnn.com' },
      { protocol: 'https', hostname: 'static01.nyt.com' },
      { protocol: 'https', hostname: 'assets.bwbx.io' },
      { protocol: 'https', hostname: 'images.wsj.net' },
      { protocol: 'https', hostname: 's.yimg.com' },
      { protocol: 'https', hostname: 'gizmodo.com' },
      { protocol: 'https', hostname: 'platform.theverge.com' },
      { protocol: 'https', hostname: 'i.insider.com' },
      { protocol: 'https', hostname: 'npr.brightspotcdn.com' },
      { protocol: 'https', hostname: 'media.zenfs.com' },
      { protocol: 'https', hostname: 'i.abcnewsfe.com' },
      { protocol: 'https', hostname: 'api.time.com' },
      { protocol: 'https', hostname: 'a.fsdn.com' },
      { protocol: 'https', hostname: 'i.blogs.es' },
      { protocol: 'https', hostname: 'www.cnet.com' },
      { protocol: 'https', hostname: 'www.lavanguardia.com' }
    ],
  },
};

export default nextConfig;
