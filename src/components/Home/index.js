import './index.scss'
import LogoSignature from '../../assets/imgs/logo_signature.jpg'
import { useSpring, animated } from '@react-spring/web'

const Home = () => {
    const portfolioItemList = [1, 2, 3];
    const topValues = ['-50%', '150%'];
    const leftValues = ['0%', '100%']

    
    const middleLogoAnimation = useSpring({
        from: { width: '90%', height: 'auto'},
        to: { width: '18%', height: 'auto'},
        delay: 1000,
        config: {
            precision: 0.0001,
            tension: 100,
            friction: 90,
            clamp: true
        }
    })
    
    const createPortfolioItem = (array) => (
        array.length > 0 ?
            array.map((item, index) => {
                return (
                    <div className = "portfolio-item">
                        <h1 className = {`portfolio-item-${index}`}>Hello World</h1>
                    </div>
                );
            }) : "No Item Found"

    )

    return (
        <div className = "container home-page">
            <animated.img className = "middle-logo" style={middleLogoAnimation} src={LogoSignature} alt='logoSignature'></animated.img>
            <div>
                {createPortfolioItem(portfolioItemList)}
            </div>
        </div>
    );
}

export default Home