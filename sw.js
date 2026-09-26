// Service worker mínimo do Garfinho.
// Existe só para o Android aceitar instalar o app (e registrar o Garfinho
// na lista de compartilhamento). Não guarda cache: tudo continua vindo da rede,
// então nenhuma atualização do index.html fica "presa" no celular.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
