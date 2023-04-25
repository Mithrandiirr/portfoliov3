import { Layout } from '@/components/Layout';
import { Main } from '@/components/Project/Main';
import React from 'react'

interface projectProps {

}

const project: React.FC<projectProps> = ({}) => {
        return (
            <Layout>
                <Main />
            </Layout>
        );
}
export default project