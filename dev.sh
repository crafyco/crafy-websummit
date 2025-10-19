#!/bin/bash

echo "🚀 Iniciando Crafy Web Summit Landing Page..."
echo "📍 Diretório: $(pwd)"
echo ""

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

# Limpar cache se necessário
if [ "$1" = "--clean" ]; then
    echo "🧹 Limpando cache..."
    rm -rf .next node_modules/.cache
    echo ""
fi

echo "🔄 Iniciando servidor de desenvolvimento..."
echo "🌐 URLs disponíveis:"
echo "   • Home:    http://localhost:3001/"
echo "   • Brand:   http://localhost:3001/brand"  
echo "   • Creator: http://localhost:3001/creator"
echo ""
echo "📊 Analytics em modo desenvolvimento - eventos serão logados no console"
echo "🛑 Pressione Ctrl+C para parar"
echo ""

npm run dev