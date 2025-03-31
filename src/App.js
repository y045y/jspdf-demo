import React from 'react';
import { jsPDF } from 'jspdf';

// `addFileToVFS` でフォントファイルをプロジェクト内で指定
const App = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // フォントのバーチャルファイルシステムへの登録
    doc.addFileToVFS('NotoSansJP-Regular.ttf', '/fonts/NotoSansJP-Regular.ttf');
    doc.setFont('NotoSansJP', 'normal'); // フォントを設定

    // 日本語テキストを設定
    doc.text("こんにちは、jsPDF!", 10, 10);  // 日本語テキストをPDFに追加

    // PDFを保存
    doc.save('table_sample.pdf');
  };

  return (
    <div className="App">
      <h1>jsPDF Demo with Japanese Font</h1>
      <button onClick={generatePDF}>PDFを生成</button>
    </div>
  );
};

export default App;
