'use client'

import { useState } from 'react'

interface AdData {
  productName: string
  adType: string
  targetAudience: string
  keyFeatures: string
  offer: string
}

interface GeneratedAd {
  title: string
  body: string
  cta: string
  badge?: string
}

export default function Home() {
  const [formData, setFormData] = useState<AdData>({
    productName: '',
    adType: 'product',
    targetAudience: '',
    keyFeatures: '',
    offer: ''
  })

  const [ads, setAds] = useState<GeneratedAd[]>([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateAds = () => {
    setLoading(true)

    setTimeout(() => {
      const generatedAds: GeneratedAd[] = []

      // إعلان 1: أسلوب مباشر وجذاب
      generatedAds.push({
        title: `${formData.productName} - الحل الأمثل لك!`,
        body: `يالله يا شباب! 🎉 ${formData.productName} وصل السعودية! ${formData.keyFeatures ? `مميزات خرافية: ${formData.keyFeatures}` : 'جودة عالمية وأسعار خيالية'}. ${formData.offer || 'عروض حصرية لفترة محدودة!'} مناسب لـ ${formData.targetAudience || 'جميع أفراد العائلة'}. لا تفوت الفرصة!`,
        cta: 'اطلب الحين! 🛒',
        badge: formData.offer ? '🔥 عرض خاص' : undefined
      })

      // إعلان 2: أسلوب عاطفي ومقنع
      generatedAds.push({
        title: `ترا ${formData.productName} بيغير حياتك!`,
        body: `والله ما راح تندم! 💫 ${formData.productName} - ${formData.keyFeatures || 'جودة ما لها مثيل'}. ${formData.targetAudience ? `مصمم خصيصاً لـ ${formData.targetAudience}` : 'يناسب الجميع'}. ${formData.offer ? `وبالمناسبة: ${formData.offer}! ` : ''}جربه وبتشوف الفرق بنفسك. الكمية محدودة - اطلبه قبل ما يخلص!`,
        cta: 'احجز الآن! ⚡',
        badge: '✨ مضمون'
      })

      // إعلان 3: أسلوب تسويقي محترف
      generatedAds.push({
        title: `عرض اليوم: ${formData.productName}`,
        body: `🌟 اكتشف ${formData.productName} - ${formData.adType === 'service' ? 'الخدمة الأولى' : 'المنتج الأول'} في السعودية! ${formData.keyFeatures ? `✓ ${formData.keyFeatures.split(',').join(' ✓ ')}` : '✓ جودة مضمونة ✓ توصيل سريع ✓ أسعار منافسة'}. ${formData.offer ? `🎁 ${formData.offer}` : '🎁 خصومات تصل لـ 50%'}. ${formData.targetAudience ? `مثالي لـ ${formData.targetAudience}` : 'للعائلة بأكملها'}!`,
        cta: 'تسوق الآن 🚀',
        badge: '🏆 الأفضل'
      })

      setAds(generatedAds)
      setLoading(false)
    }, 1000)
  }

  const resetForm = () => {
    setFormData({
      productName: '',
      adType: 'product',
      targetAudience: '',
      keyFeatures: '',
      offer: ''
    })
    setAds([])
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🎯 صانع الإعلانات السعودي</h1>
        <p>أنشئ إعلانات احترافية باللهجة السعودية في ثوانٍ</p>
      </header>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="productName">اسم المنتج أو الخدمة *</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="مثال: جوال آيفون 15، خدمة توصيل، مطعم..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="adType">نوع الإعلان</label>
          <select
            id="adType"
            name="adType"
            value={formData.adType}
            onChange={handleChange}
          >
            <option value="product">منتج</option>
            <option value="service">خدمة</option>
            <option value="restaurant">مطعم / كافيه</option>
            <option value="event">فعالية / حدث</option>
            <option value="real-estate">عقار</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="targetAudience">الجمهور المستهدف</label>
          <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            placeholder="مثال: الشباب، العائلات، رجال الأعمال..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="keyFeatures">المميزات الرئيسية</label>
          <textarea
            id="keyFeatures"
            name="keyFeatures"
            value={formData.keyFeatures}
            onChange={handleChange}
            placeholder="مثال: جودة عالية، سعر منافس، توصيل مجاني، ضمان سنتين..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="offer">العرض الخاص (اختياري)</label>
          <input
            type="text"
            id="offer"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            placeholder="مثال: خصم 30%، اشتر 2 واحصل على الثالث مجاناً..."
          />
        </div>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={generateAds}
            disabled={!formData.productName}
          >
            🎨 أنشئ الإعلانات
          </button>
          <button className="btn btn-secondary" onClick={resetForm}>
            🔄 مسح الكل
          </button>
        </div>
      </div>

      {loading && (
        <div className="loading">
          ⏳ جاري إنشاء الإعلانات...
        </div>
      )}

      {!loading && ads.length > 0 && (
        <div className="preview-section">
          {ads.map((ad, index) => (
            <div key={index} className="ad-card">
              {ad.badge && <div className="ad-badge">{ad.badge}</div>}
              <h2 className="ad-title">{ad.title}</h2>
              <p className="ad-body">{ad.body}</p>
              <a href="#" className="ad-cta">{ad.cta}</a>
            </div>
          ))}
        </div>
      )}

      {!loading && ads.length === 0 && (
        <div className="empty-state">
          <h3>👆 ابدأ بإنشاء إعلانك</h3>
          <p>عبّي البيانات فوق وشوف السحر يصير!</p>
        </div>
      )}
    </div>
  )
}
