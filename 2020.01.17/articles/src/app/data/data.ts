import { data } from './seeds';
import { Article } from '../models/article.model';

export class ArticleData {
	getData(): Article[] {
		let articles: Article[] = [];

		data.forEach((el, index) => {
			articles.push(new Article(el.title, el.description, el.author, el.imageUrl))
		});
		return articles;
	}
}
