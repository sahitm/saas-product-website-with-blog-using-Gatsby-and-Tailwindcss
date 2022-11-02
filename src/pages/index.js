import React from 'react'
import '../styles/global.css'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'

export default function App() {
  return (
    <div>
      <Layout>
        <Features />
        <Pricing />
        <Faq />
      </Layout>
    </div>
  )
}

