// SAMPLE DATA ONLY. Verify admission routes, courses and dates on each institute's
// official website before relying on them. Add or edit entries freely.
const i = (name, city, state, type, streams, courses, entrance, description) => ({
  name, city, state, type, streams, courses, entrance, description
});

module.exports = [
  // Engineering & technology
  i('IIT Bombay', 'Mumbai', 'Maharashtra', 'Government', ['engineering', 'science', 'design'], ['B.Tech', 'M.Tech', 'B.Des', 'M.Sc.'], 'JEE Advanced (B.Tech)', 'One of the Indian Institutes of Technology, known for engineering and research.'),
  i('IIT Delhi', 'New Delhi', 'Delhi', 'Government', ['engineering', 'science'], ['B.Tech', 'M.Tech', 'M.Sc.'], 'JEE Advanced (B.Tech)', 'Indian Institute of Technology in the national capital.'),
  i('IIT Madras', 'Chennai', 'Tamil Nadu', 'Government', ['engineering', 'science'], ['B.Tech', 'M.Tech', 'M.Sc.'], 'JEE Advanced (B.Tech)', 'Indian Institute of Technology in Chennai.'),
  i('NIT Tiruchirappalli', 'Tiruchirappalli', 'Tamil Nadu', 'Government', ['engineering'], ['B.Tech', 'M.Tech', 'MCA'], 'JEE Main (B.Tech)', 'National Institute of Technology in Tamil Nadu.'),
  i('College of Engineering Pune (COEP Tech)', 'Pune', 'Maharashtra', 'Government', ['engineering'], ['B.Tech', 'M.Tech'], 'MHT-CET / JEE Main', 'Technological university in Pune with a long engineering tradition.'),
  i('VJTI Mumbai', 'Mumbai', 'Maharashtra', 'Government', ['engineering'], ['B.Tech', 'M.Tech'], 'MHT-CET / JEE Main', 'Veermata Jijabai Technological Institute, Mumbai.'),
  i('Government College of Engineering, Chhatrapati Sambhajinagar', 'Chhatrapati Sambhajinagar', 'Maharashtra', 'Government', ['engineering'], ['B.Tech', 'M.Tech'], 'MHT-CET', 'Government engineering college in Marathwada region.'),
  // Medical
  i('AIIMS New Delhi', 'New Delhi', 'Delhi', 'Government', ['medical'], ['MBBS', 'B.Sc. Nursing', 'MD / MS'], 'NEET UG (MBBS)', 'All India Institute of Medical Sciences, a leading medical college and hospital.'),
  i('Christian Medical College (CMC) Vellore', 'Vellore', 'Tamil Nadu', 'Private', ['medical'], ['MBBS', 'B.Sc. Nursing', 'BPT'], 'NEET UG (MBBS)', 'Well-known medical college and hospital.'),
  i('Armed Forces Medical College (AFMC)', 'Pune', 'Maharashtra', 'Government', ['medical'], ['MBBS', 'B.Sc. Nursing'], 'NEET UG', 'Medical college run by the armed forces.'),
  i('JIPMER', 'Puducherry', 'Puducherry', 'Government', ['medical'], ['MBBS', 'B.Sc. Nursing', 'MD / MS'], 'NEET UG (MBBS)', 'Jawaharlal Institute of Postgraduate Medical Education and Research.'),
  // Commerce & management
  i('Shri Ram College of Commerce (SRCC)', 'New Delhi', 'Delhi', 'Government', ['commerce'], ['B.Com (Hons)', 'B.A. (Hons) Economics'], 'CUET UG', 'University of Delhi college known for commerce and economics.'),
  i("St. Xavier's College, Mumbai", 'Mumbai', 'Maharashtra', 'Private', ['commerce', 'arts', 'science'], ['B.Com', 'B.A.', 'B.Sc.', 'BMS'], 'College admission process / entrance as announced', 'Autonomous college offering arts, science and commerce.'),
  i('IIM Ahmedabad', 'Ahmedabad', 'Gujarat', 'Government', ['commerce'], ['MBA / PGP', 'Ph.D.'], 'CAT', 'Indian Institute of Management, a leading business school.'),
  i('IIM Bangalore', 'Bengaluru', 'Karnataka', 'Government', ['commerce'], ['MBA / PGP', 'Ph.D.'], 'CAT', 'Indian Institute of Management in Bengaluru.'),
  // Science & research
  i('Indian Institute of Science (IISc)', 'Bengaluru', 'Karnataka', 'Deemed', ['science', 'engineering'], ['B.S. (Research)', 'M.Tech', 'M.Sc.', 'Ph.D.'], 'Check the official website', 'Premier research university.'),
  i('IISER Pune', 'Pune', 'Maharashtra', 'Government', ['science'], ['BS-MS (Dual Degree)', 'Ph.D.'], 'IISER Aptitude Test (IAT) / other routes', 'Indian Institute of Science Education and Research.'),
  // Arts & humanities
  i('Jawaharlal Nehru University (JNU)', 'New Delhi', 'Delhi', 'Government', ['arts', 'law', 'science'], ['BA (Languages)', 'MA', 'M.Sc.', 'Ph.D.'], 'CUET', 'Central university known for social sciences and humanities.'),
  i('Miranda House, University of Delhi', 'New Delhi', 'Delhi', 'Government', ['arts', 'science'], ['B.A. (Hons)', 'B.Sc. (Hons)'], 'CUET UG', 'University of Delhi college for women.'),
  i('Fergusson College', 'Pune', 'Maharashtra', 'Government', ['arts', 'science', 'commerce'], ['B.A.', 'B.Sc.', 'B.Com', 'M.Sc.'], 'College admission process', 'Historic autonomous college in Pune.'),
  i('Dr. Babasaheb Ambedkar Marathwada University', 'Chhatrapati Sambhajinagar', 'Maharashtra', 'Government', ['arts', 'science', 'commerce', 'law'], ['B.A.', 'B.Sc.', 'B.Com', 'LL.B', 'M.A.', 'M.Sc.'], 'University admission process', 'State university in the Marathwada region.'),
  // Law & civil services
  i('National Law School of India University (NLSIU)', 'Bengaluru', 'Karnataka', 'Government', ['law'], ['BA LL.B (Hons)', 'LL.M'], 'CLAT', 'Leading national law university.'),
  i('National Law University, Delhi', 'New Delhi', 'Delhi', 'Government', ['law'], ['BA LL.B (Hons)', 'LL.M'], 'AILET', 'National law university in Delhi.'),
  // Design & creative
  i('National Institute of Design (NID)', 'Ahmedabad', 'Gujarat', 'Government', ['design'], ['B.Des', 'M.Des'], 'NID Design Aptitude Test (DAT)', 'Premier design institute.'),
  i('NIFT Delhi', 'New Delhi', 'Delhi', 'Government', ['design'], ['B.Des (Fashion)', 'B.F.Tech', 'M.F.M'], 'NIFT Entrance Exam', 'National Institute of Fashion Technology.'),
  i('Symbiosis Institute of Design', 'Pune', 'Maharashtra', 'Deemed', ['design'], ['B.Des', 'M.Des'], 'SEED', 'Design school in Pune.')
];
