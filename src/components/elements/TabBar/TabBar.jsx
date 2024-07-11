import { useState } from 'react';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('detail');

  const renderContent = () => {
    switch (activeTab) {
      case 'detail':
        return (
          <div>
            <p>Sertifikat: Halal</p>
            <p>Kondisi: Baru</p>
            <p>Min. Pesanan: 1 Buah</p>
            <p>Etalase: Tropicana Slim</p>
            <p>
              Tropicana Slim Cafe Latte adalah paduan kopi susu yang sempurna
              dengan rasa manis yang bisa dinikmati tanpa rasa khawatir karena
              diformulasikan tanpa penambahan gula pasir sehingga aman untuk
              diabetesi dan cocok untuk diet. Semangati harimu dengan secangkir
              Tropicana Slim Cafe Latte!
            </p>
            <p>
              Mengapa Tropicana Slim Cafe Latte?
              <br />- Rasa kopi susu yang nikmat...
            </p>
            <a href="#" className="text-green-600">
              Lihat Selengkapnya
            </a>
          </div>
        );
      case 'info':
        return <div>Informasi Penting...</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex border-b">
        <button
          className={`mr-4 pb-2 ${
            activeTab === 'detail'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('detail')}
        >
          Detail
        </button>
        <button
          className={`pb-2 ${
            activeTab === 'info'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('info')}
        >
          Info Penting
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabBar;
