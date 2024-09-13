import img from '../../../assets/img/About-img.png'
import styles from './styles.module.scss'

export const AboutUs = () => {
    return (
        <section className={`${styles.flexLayout} container`}>
            <div>
                <div className={styles.textDiv}>
                    <h2>Sobre a Jobs</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam dolorem sapiente dolores debitis doloremque fuga praesentium a voluptatibus nam porro voluptates quisquam, quam ipsum facere illum ipsa iste. Sapiente?</p>
                </div>
                <img src={img} alt="Reunião de pessoas" />
            </div>
        </section>
    )
}