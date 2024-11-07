"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, Arrow, Card, Divider } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Themes",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Layout",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];

	const services = [
		{
			title: "Email Campaigns & Automation",
			description: "Tailor each email for maximum engagement with advanced automation. Our automated workflows ensure messages reach your audience at the perfect time, every time.",
		},
		{
			title: "Bulk Marketing Campaigns",
			description: "Extend your reach with high-volume email, SMS, and social media blasts, connecting with thousands of prospects swiftly and effectively.",
		},
		{
			title: "Content Creation",
			description: "Captivate your audience with tailored, brand-aligned content that communicates your message with clarity and creativity.",
		},
		{
			title: "Feedback Loops",
			description: "Gather direct insights from customers to refine offerings. Real-time feedback helps adapt strategies for ongoing improvement.",
		},
		{
			title: "Personalized Database Campaigns",
			description: "Harness customer data for more targeted and personalized outreach, creating a deeper connection with each individual.",
		},
		{
			title: "Automated Product Launches",
			description: "Ensure seamless, organized launches with comprehensive automation to create buzz and drive sales right from the start.",
		},
	];

	const testimonials = [
		{
			name: "Alex Johnson",
			feedback: "Ever Technologies transformed our email outreach! Their automation saved us countless hours and kept our audience engaged.",
		},
		{
			name: "Sophia Lee",
			feedback: "The feedback loop feature was a game-changer. We can now improve our products based on direct customer input.",
		},
		{
			name: "Michael Roberts",
			feedback: "From campaign design to launch, Ever Technologies handled it all seamlessly. Our product launch was a success!",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			{/* Header Section */}
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Welcome to Ever Technologies
									</LetterFx>
								</span>
							</Heading>
							<Text variant="body-default-m" onBackground="neutral-weak">
								At Ever Technologies, we empower businesses to connect with their audience in a personalized, data-driven way. Through dynamic and automated solutions, we enhance engagement, foster brand loyalty, and drive results.
							</Text>
							<Text variant="body-default-m" onBackground="neutral-weak">
								Discover our specialized services below, each designed to streamline your marketing and elevate your brand.
							</Text>
							<Button
								id="readDocs"
								href="https://once-ui.com/docs"
								variant="secondary">
								<Flex alignItems="center">
									Read docs
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>

					{/* Services Section */}
					<Heading variant="headline-m" marginTop="l">Our Services</Heading>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{services.map((service, index) => (
							<Card key={index} padding="m" border="neutral-weak" shadow="s">
								<Heading variant="body-strong-m">{service.title}</Heading>
								<Text variant="body-default-s" onBackground="neutral-weak">{service.description}</Text>
							</Card>
						))}
					</Grid>

					{/* Testimonials Section */}
					<Heading variant="headline-m" marginTop="l">What Our Clients Say</Heading>
					<Flex direction="row" gap="m" wrap="wrap" justifyContent="center" fillWidth>
						{testimonials.map((testimonial, index) => (
							<Card key={index} padding="m" border="neutral-medium" shadow="s" width="300px">
								<Text variant="body-strong-s">{testimonial.name}</Text>
								<Text variant="body-default-s" onBackground="neutral-weak">"{testimonial.feedback}"</Text>
							</Card>
						))}
					</Flex>

					{/* Call-to-Action Section */}
					<Divider marginY="l"/>
					<Flex direction="column" alignItems="center" textAlign="center" paddingY="l" gap="m">
						<Heading variant="headline-m">Ready to Transform Your Marketing?</Heading>
						<Text variant="body-default-m" onBackground="neutral-weak">
							Contact Ever Technologies today and discover how our innovative solutions can help you connect, engage, and grow.
						</Text>
						<Button href="/contact" variant="primary">
							Get Started
						</Button>
					</Flex>
				</Flex>
			</Flex>

			{/* Footer Section */}
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Ever Technologies. All rights reserved.
				</Text>
				<Flex gap="12">
					<Button
						href="https://github.com/ever-technologies"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
