import { Element } from "react-scroll";
import { Title } from "./globalStyledComponents";
import styled from "styled-components";

import axios from 'axios';
import { Text, Link, ChakraProvider, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const cheerio = require('cheerio')

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Publications() {
    const PROXY_URL = 'https://safe-mountain-19493.herokuapp.com/';
    const URL = 'https://scholar.google.com/citations';
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(PROXY_URL + URL, {
            params: {
                'user': 'twlxlp0AAAAJ',
                'hl': 'en'
            }
        })
            .then(res => {
                let $ = cheerio.load(res.data);
                let arrayArticles = [];
                $('#gsc_a_b .gsc_a_t').each((index, element) => {
                    const title = $(element).find('.gsc_a_at').text();
                    const link = $(element).find('.gsc_a_at').attr('href');
                    const author = $(element).find('.gsc_a_at + .gs_gray').text();
                    const journal = $(element).find('.gs_gray + .gs_gray').text();
                    arrayArticles.push({ 'title': title, 'link': link, 'author': author, 'journal': journal });
                })
                $('#gsc_a_b .gsc_a_c').each((index, element) => {
                    const cited = $(element).find('.gs_ibl').text();
                    const citedLink = $(element).find('.gs_ibl').attr('href');
                    arrayArticles[index]['cited'] = cited;
                    arrayArticles[index]['citedLink'] = citedLink;
                })
                setArticles(arrayArticles);
            })
            .catch(err => console.error())
    }, [])

    return (
        <Element name={"Publications"} id="publications">
            <StyledAboutMe className="section">
                <Container>
                    <Container className="d-flex">
                        <Title>
                            <h2>Publications</h2>
                            <div className="underline"></div>
                        </Title>
                    </Container>
                    <ChakraProvider>
                        <Container maxW={'container.md'}>
                            {articles.map(article => {
                                return (
                                    <>
                                        <Link href={`https://scholar.google.com${article.link}`} isExternal>
                                            <Text fontWeight={600} color={'teal.800'}>{article.title}</Text>
                                        </Link>
                                        <Text color={'gray.600'}>{article.author}</Text>
                                        <Text color={'gray.600'}>{article.journal}</Text>
                                        <Link href={article.citedLink} isExternal>
                                            <Text color={'gray.600'}>Cited by {article.cited}</Text>
                                        </Link>
                                    </>
                                )
                            })}
                        </Container>
                    </ChakraProvider>
                </Container>
            </StyledAboutMe>
        </Element>
    );
}
