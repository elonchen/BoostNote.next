import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import HeroSection from '../components/organisms/HeroSection'
import RoadmapSection from '../components/organisms/RoadmapSection'
import FeaturesSection from '../components/organisms/FeaturesSection'
import PricingPlansSection from '../components/organisms/PricingPlansSection'
import BoostHubSection from '../components/organisms/BoostHubSection'
import LegacyAppSection from '../components/organisms/LegacyAppSection'
import CommunitySection from '../components/organisms/CommunitySection'

const HomePage = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <RoadmapSection />
      <FeaturesSection />
      <PricingPlansSection />
      <BoostHubSection />
      <LegacyAppSection />
      <CommunitySection />
    </DefaultLayout>
  )
}

export default HomePage
