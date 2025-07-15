import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const services = [
    {
        name: 'subscribe-service',
        // Новый путь относительно main-server.ts
        path: path.resolve(__dirname, './dist//subscription-service/app/app.js')
    },
];
services.forEach(service => {
    const proc = spawn('node', [
        '--loader', 'ts-node/esm',
        service.path
    ], {
        stdio: 'inherit',
        shell: true,
    });
    // Обработчики событий остаются без изменений
    proc.on('error', err => { });
    proc.on('exit', code => { });
});
console.log('🚀 Main server запустил все микросервисы');
