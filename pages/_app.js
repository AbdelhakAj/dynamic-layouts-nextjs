import MainLayout from '../layouts/MainLayout'
import DefaultLayout from '../layouts/DefaultLayout'

export default function App({ Component, pageProps }) {

    const SubLayout = Component.Layout || DefaultLayout;

    return (
        <MainLayout>
            <SubLayout> 
                <Component {...pageProps} />
            </SubLayout> 
        </MainLayout>
    )
}