import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { IoLogoGithub } from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({
  children,
  demo_href,
  github_href,
  title,
  thumbnail,
  stacks
}) => (
  <Box w="100%" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      loading="lazy"
    />
    <Text mt={2} fontWeight="bold" color="tomato">
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
    <Text fontSize={12} textAlign={'left'} mt={3}>
      <bold>Stacks:</bold> {stacks}
    </Text>
    <Flex justify={'center'}>
      <NextLink target="_blank" href={github_href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Button
            mt={2}
            mr={1}
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
          >
            Github
          </Button>
        </a>
      </NextLink>
      <NextLink target="_blank" href={demo_href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Button mt={2} variant="ghost" colorScheme="teal">
            Live Demo
          </Button>
        </a>
      </NextLink>
    </Flex>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
