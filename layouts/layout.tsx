import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google';
import Header from '../pages/header';
import Footer from '../pages/footer';
import { Container } from 'react-bootstrap';
import { Pages } from './pages';

interface RootLayoutProps {
  pages: Pages;
  children: React.ReactNode;
}

export function RootLayout({ pages, children }: RootLayoutProps) {
  return (
    <div id='app'>
      <Head>
        <title>Pristine STL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentPage={pages} />
      <Container id={pages}>
        {children}
      </Container>
      <br></br>
      <Footer/>
    </div>
  );
};
