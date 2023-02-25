import './index.scss'
import LogoSignature from '../../assets/imgs/logo_signature.jpg'
import { useSpring, animated } from '@react-spring/web'

function MiddleLogo() {
    const props = useSpring({
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

    return <animated.img style={props} src={LogoSignature} alt='logoSignature'></animated.img>
}

export default MiddleLogo