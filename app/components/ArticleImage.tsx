import Image from "next/image";
import { useState, useEffect, JSX } from "react";
import { Text } from "@radix-ui/themes";

interface ArticleImageProps {
  urlToImage: string;
  title: string;
}

export default function ArticleImage({ urlToImage, title }: ArticleImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!urlToImage) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setImageUrl(`/api/image-proxy?url=${encodeURIComponent(urlToImage)}`);
  }, [urlToImage]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (isLoading && !imageUrl) {
    return (
      <Text >
        Loading...
      </Text>
    );
  }

  if (hasError || !urlToImage) {
    return (
      <Text >Image not available</Text>
    );
  }

  return (
    <>
      {imageUrl && (
        <Image
          src={imageUrl}
          fill
          alt={title || "News image"}
          style={{ objectFit: "cover" }}
          priority={false}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
      {isLoading && (
        <Text >Loading...</Text>
      )}
    </>
  );
};


