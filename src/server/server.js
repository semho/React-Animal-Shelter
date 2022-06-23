import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(App())),
    );
});

app.get('/auth', (req, res) => {
    // req.query.code;
    res.send(
        indexTemplate(ReactDom.renderToString(App())),
    );
});

app.listen(3000, () => {
    console.log('Server started in http://localhost:3000');
});
