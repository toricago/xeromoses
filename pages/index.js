import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbPixelia from '../public/images/pixelia.png'
import thumbMoneyWise from '../public/images/money-wise.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a front-end web developer from Thailand !
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            YANAT CHAIPRASERT
          </Heading>
          <p>Front-End Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/xeromoses.jpg"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" color="tomato" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          Welcome to my web portfolio! My name is Mos, and I am a passionate
          Frontend Developer with 4 years of experience in developing beautiful,
          user-friendly, and responsive websites. With my expertise in
          JavaScript-based stacks, and various frontend frameworks, I specialize
          in creating interactive and engaging web interfaces that enhance the
          user experience. My passion is to create somethings useful, fun and
          challenging. I make sure that I will stay up to date with the latest
          technology because my life is a never-ending learning.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box> */}
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" color="tomato" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2013</BioYear>
          Graduated the Bachelor Degree in the Graduate School of Computer
          Engineer at Thammasat University (SIIT).
        </BioSection>
        <BioSection>
          <BioYear>2017 - 2018</BioYear>
          Worked at Ascend Group as front-end developer.
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2023</BioYear>
          Worked at Sharmble Tech as full-stack developer.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" color="tomato" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Games, {/* <Link href="" target="_blank"> */}
          Drawing
          {/* </Link> */}, Playing Drums, {/* <Link href="" target="_blank"> */}
          Photography
          {/* </Link> */}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List mb={5}>
          <ListItem>
            <NextLink href="https://github.com/toricago" target="_blank">
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @toricago
                </Button>
              </a>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="https://www.linkedin.com/in/yanut-chaiprasert-629666150/">
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Yanut Chaiprasert
                </Button>
              </a>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="https://instagram.com/xeromoses" target="_blank">
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @xeromoses
                </Button>
              </a>
            </NextLink>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title" pb={3}>
          Personal Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ProjectGridItem
            demo_href="https://pixelia.netlify.app"
            github_href="https://github.com/toricago/pixelia"
            title="Pixelia"
            thumbnail={thumbPixelia}
            stacks="MERN tailwindcss OpenAI (for live demo please wait for
              server to start)"
          >
            A website that user can generate images using open ai, and can share
            it to the web's community
          </ProjectGridItem>
          <ProjectGridItem
            demo_href="https://money-wise.netlify.app/"
            github_href="https://github.com/toricago/money-wise"
            title="Money Wise"
            thumbnail={thumbMoneyWise}
            stacks="AstroJs tailwindcss NetlifyCMS"
          >
            A blog for finance lovers created by Astro
          </ProjectGridItem>
        </SimpleGrid>
        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
