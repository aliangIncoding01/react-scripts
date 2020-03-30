// demo页面
const demo = () => import('@/page/demo');
const demo_mock = () => import('@/page/demo/mock');

const routes = [
    // demo页面
    {
        path: '/demo',
        component: demo,
        subRoutes: [
            {
                path: '/demo/mock',
                component: demo_mock,
                onEnter: () => {
                    document.title = 'demo-mock';
                },
                onLeave: () => { }
            }
        ]
    }
];

export default routes;
