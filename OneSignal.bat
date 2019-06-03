@echo off
echo Copia ServiceWorker di OneSignal

pushd build\production\DelphiDayApp\
del ext-service-worker.js
ren service-worker.js ext-service-worker.js
popd
copy os-service-worker.js build\production\DelphiDayApp\service-worker.js
copy os-service-worker-updater.js build\production\DelphiDayApp\service-worker-updater.js

echo Modifica index.html
sed -i -e 's/navigator\.serviceWorker\.register//g' build\production\DelphiDayApp\index.html