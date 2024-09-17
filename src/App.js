

import { MarkGithubIcon } from '@primer/octicons-react';

import AsyncStatusUpdater from './AsyncStatusUpdater.js';

import { Header, Octicon, Avatar, PageLayout } from '@primer/react';

import { ThemeProvider, BaseStyles } from '@primer/react'

function App() {


    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <Header sx={{ bg: 'gray.1' }}>
                    <Header.Item full>
                        <Octicon icon={MarkGithubIcon} size={24} sx={{ mr: 2 }} />
                        <Header.Link href="https://github.com/bsoicher">bsoicher</Header.Link>
                    </Header.Item>
                    <Header.Item sx={{ mr: 0 }}>
                        <Avatar src="https://github.com/octocat.png" size={32} alt="@octocat" />
                    </Header.Item>
                </Header>
                <PageLayout containerWidth={'xlarge'} sx={{ mr: 2 }}>
                    <PageLayout.Content>
                        <h1>Async application</h1>

                        <p>
                            This is a simple application that demonstrates async task management with React.
                        </p>
                        <br />

                        <AsyncStatusUpdater />
                    </PageLayout.Content>
                </PageLayout>
            </BaseStyles>
        </ThemeProvider>
    );
}



export default App;
