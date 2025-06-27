'use client';
import './Skills.css';

const skills = [
{
  title: 'Python & Pandas',
  category: 'Data Analysis',
  number: 1,
  icon: '🐍',
},
{
  title: 'NumPy & Matplotlib',
  category: 'Scientific Computing',
  number: 2,
  icon: '📊',
},
{
  title: 'Scikit-learn',
  category: 'Machine Learning',
  number: 3,
  icon: '🤖',
},
{
  title: 'Streamlit',
  category: 'ML Deployment',
  number: 4,
  icon: '⚡',
},
{
  title: 'Power BI',
  category: 'Data Visualization',
  number: 5,
  icon: '📈',
},
{
  title: 'Web Scraping (BS4, Requests)',
  category: 'Data Collection',
  number: 6,
  icon: '🌐',
},
{
  title: 'EDA & Feature Engineering',
  category: 'Data Preprocessing',
  number: 7,
  icon: '🧹',
},
{
  title: 'Jupyter Notebook',
  category: 'Interactive Computing',
   
  number: 8,
  icon: '📓',
},
{
  title: 'SQL',
  category: 'Databases',
   
  number: 9,
  icon: '🗄️',
},
{
  title: 'Git & GitHub',
  category: 'Version Control',
  number: 10,
  icon: '🔧',
},

];

export default function Skills() {
  return (
    <section className="aboutskills-section">
      <div className="aboutskills-header">
        <h1 className="aboutskills-title">SKILLS</h1>
      </div>
      <hr className="aboutskills-divider" />

      <div className="aboutskills-grid">
        {skills.map((item) => (
          <div key={item.number} className="aboutskills-card">
            <span className="aboutskills-number">({item.number})</span>
            <div className="aboutskills-info">
              <p className="aboutskills-meta">
                {item.category}  <span className="aboutskills-icon">{item.icon}</span>
              </p>
              <h3 className="aboutskills-entry">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
