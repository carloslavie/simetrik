import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../src/components/header';
import Inicio from '../src/components/inicio';


export default function Home() {
  return (  
    <Header />
  )
}
