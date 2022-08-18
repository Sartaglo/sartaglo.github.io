import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<object
			data="https://drive.google.com/file/d/16lZTOsoIvX1NbtWL2LRwbfHydEs1ybrm/preview"
			height={480}
			width={640}
		>
			<embed src="https://drive.google.com/file/d/16lZTOsoIvX1NbtWL2LRwbfHydEs1ybrm/preview" />
		</object>
	</div>
);

export default Home;
