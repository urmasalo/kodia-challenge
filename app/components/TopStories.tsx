"use client";

import { Flex, Text, Card, Box, AspectRatio, Heading, Skeleton, Button } from "@radix-ui/themes";
import { JSX, useEffect, useState } from "react";
import axios from "axios";
import { useDataContext } from "./DataContext";
import ArticleImage from "./ArticleImage";
import ArticleTime from "./ArticleTime";

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    author: string;
}

interface NewsResponse {
    articles: Article[];
}

export default function TopStories(): JSX.Element {

    const { searchCriteria, performSearch, setPerformSearch, language } = useDataContext();
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [formattedDate, setFormattedDate] = useState<string>("");
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                setError(null);

                const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
                if (!apiKey) {
                    throw new Error("API key is not configured. Please add NEXT_PUBLIC_NEWS_API_KEY to your environment variables.");
                }

                const url = `https://newsapi.org/v2/everything?q=${searchCriteria}&language=${language}&apiKey=${apiKey}`;

                const response = await axios.get<NewsResponse>(url);

                if (response.data.articles.length === 0) {
                    setError("No articles found for the given search criteria.");
                } else {
                    setNews(response.data.articles);
                }
            } catch (error: any) {
                console.error("Error fetching news:", error);
                setError("Error fetching news: " + (error.response?.data?.message || error.message));
                setNews([]);
            } finally {
                setLoading(false);
                setPerformSearch(false);
                setIsInitialLoad(false);
            }
        };

        if (performSearch || isInitialLoad) {
            fetchNews();
        }
    }, [performSearch, searchCriteria, setPerformSearch, isInitialLoad]);

    useEffect(() => {
        const formatted = new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
        setFormattedDate(formatted);
    }, []);

    if (loading) {
        return (
            <Flex mx="9" direction="column" gap="9">
                <Skeleton height="20px" width="200px" />
                <Skeleton height="20px" width="250px" />
                <Flex gap="6" direction="column" width="640px">
                    {[...Array(3)].map((_, index) => (
                        <Card size="1" key={index}>
                            <Flex align="start" justify="between" gap="3" direction="column">
                                <Skeleton height="180px" width="100%" />
                                <Skeleton height="32px" width="90%" />
                                <Skeleton height="16px" width="60%" />
                                <Skeleton height="80px" width="100%" />
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex mx="9" direction="column" gap="6" align="center" justify="center" style={{ minHeight: '50vh' }}>
                <Heading size="6" color="red">Error Loading Articles</Heading>
                <Text size="3">{error}</Text>
                <Box mt="4">
                    <Button
                        size={'4'}
                        onClick={() => {
                            setError(null);
                            setIsInitialLoad(true);
                        }}
                    >
                        Try Again
                    </Button>
                </Box>
            </Flex>
        );
    }

    if (news.length === 0) {
        return (
            <Flex mx="9" direction="column" gap="6" align="center" justify="center" style={{ minHeight: '50vh' }}>
                <Heading size="6">No Articles Found</Heading>
                <Text size="3">Try changing your search criteria to find different articles.</Text>
            </Flex>
        );
    }

    return (
        <>
            <Text size="3" color="gray" ml={'9'} >
                {formattedDate}
            </Text>
            <Flex mx="9" direction="column" gap="9" align="center">
                <Flex gap="6" direction="column" align="center">
                    {news.map((article, index) => (
                        <Card size="2" key={index} >
                            <Flex align="start" justify="between" gap="3" direction={"column"} width={'700px'}>
                                <AspectRatio ratio={20 / 10}>
                                    <ArticleImage urlToImage={article.urlToImage} title={article.title} />
                                </AspectRatio>
                                <Heading size="7">{article.title || "Untitled Article"}</Heading>
                                <Text size="2">
                                    <ArticleTime publishedAt={article.publishedAt} author={article.author} />
                                </Text>
                                <Text size={"5"}>{article.description || "No description available."}</Text>
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </Flex>

        </>
    );
}

