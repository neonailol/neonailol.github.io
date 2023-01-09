import About from './about'
import Interests from './interests'
import Skills from './skills'
import styles from './main.module.css'

export default function Main() {
	return (
		<>
			<main>
				<div>
					<About />
					<Interests />
					<Skills />
				</div>
			</main>
		</>
	)
}