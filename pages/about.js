import { NextSeo } from 'next-seo';

export default function about(props) {
    console.log(props)
    return (
        <div>
            <NextSeo
                title="About"
                description="This example uses more of the available config options."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: 'https://www.example.ie/og-image-02.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        }
                    ],
                    site_name: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            test
        </div>
    )
}