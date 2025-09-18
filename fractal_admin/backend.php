<?php
header('Content-Type: application/json');

// Define o caminho para o arquivo do catálogo
$catalogFile = '../js/catalog-data.js';

// Função para ler o arquivo do catálogo
function readCatalog() {
    global $catalogFile;
    if (file_exists($catalogFile)) {
        $content = file_get_contents($catalogFile);
        // Retorna um array associativo do JSON, ou um array vazio em caso de JSON inválido
        $data = json_decode($content, true);
        return is_array($data) ? $data : [];
    }
    // Retorna a estrutura inicial se o arquivo não existir
    return [
        'experimentos' => ['title' => 'Experimentos', 'categories' => ['Física', 'Química', 'Biologia', 'Matemática', 'Astronomia'], 'products' => []],
        'miniexps' => ['title' => 'MiniExPs', 'categories' => ['Física', 'Química', 'Biologia', 'Matemática'], 'products' => []],
        'souvenirs' => ['title' => 'Souvenirs', 'categories' => ['Geral'], 'products' => []],
        'sequencias' => ['title' => 'Sequências Didáticas', 'categories' => ['Física', 'Química', 'Biologia', 'Matemática', 'Astronomia'], 'products' => []]
    ];
}

// Função para escrever no arquivo do catálogo
function writeCatalog($data) {
    global $catalogFile;
    // Converte o array em uma string JSON formatada para leitura
    $jsonContent = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($jsonContent === false) {
        // Retorna um erro se a codificação JSON falhar
        return false;
    }
    // Salva o conteúdo no arquivo, usando LOCK_EX para evitar concorrência
    return file_put_contents($catalogFile, $jsonContent, LOCK_EX);
}

// Lógica principal do script
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Lógica para lidar com requisições GET (ler dados)
        $catalogData = readCatalog();
        echo json_encode($catalogData);
        break;

    case 'POST':
        // Lógica para lidar com requisições POST (salvar dados)
        $input = file_get_contents('php://input');
        $newData = json_decode($input, true);

        if (json_last_error() !== JSON_ERROR_NONE || !is_array($newData)) {
            http_response_code(400); // Bad Request
            echo json_encode(['status' => 'error', 'message' => 'JSON inválido ou formato de dados incorreto.']);
            exit;
        }

        // Tenta salvar os novos dados
        if (writeCatalog($newData) !== false) {
            echo json_encode(['status' => 'success', 'message' => 'Dados salvos com sucesso.']);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(['status' => 'error', 'message' => 'Erro ao escrever no arquivo. Verifique as permissões de escrita.']);
        }
        break;

    default:
        // Responde a outros métodos com um erro
        http_response_code(405); // Method Not Allowed
        echo json_encode(['status' => 'error', 'message' => 'Método não permitido.']);
        break;
}
?>