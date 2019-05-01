import ArticleList from './components/ArticleList';
import Article from './components/Article';

export default [{
    path: '/',
    redirect: '/article-list'
}, {
    path: '/article-list',
    component: ArticleList,
}, {
    path: '/article/:id',
    component: Article,
    props: true
}];