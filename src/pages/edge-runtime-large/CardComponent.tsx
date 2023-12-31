import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'

const CardComponent = () => {
  return (
    <div className="flex flex-col space-y-4">
        <Card>
            <Flex gap="3" align="center">
                <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
                />
                <Box>
                <Text as="div" size="2" weight="bold">
                    Felix Runye
                </Text>
                <Text as="div" size="2" color="gray">
                    Engineering
                </Text>
                </Box>
            </Flex>
        </Card>
        <Card asChild style={{ maxWidth: 350 }}>
        <a href="#">
            <Text as="div" size="2" weight="bold">
            Quick start
            </Text>
            <Text as="div" color="gray" size="2">
            Start building your next project in minutes
            </Text>
        </a>
        </Card>
    </div>
  )
}

export default CardComponent