import { jsPDF } from 'jspdf';
import { personalInfo, experiencesData, projectsData, skillsData, educationData, certificatesData } from '../data/portfolioData';

/**
 * Generates and downloads a clean, professional ATS-standard PDF resume for Laiba Saleem.
 * Complies with strict typography, margins, and content accuracy.
 */
export function generateAndDownloadCV(customBlobUrl?: string | null): void {
  // If an actual custom uploaded PDF blob is provided by the user in this session, download that
  if (customBlobUrl) {
    const link = document.createElement('a');
    link.href = customBlobUrl;
    link.download = 'Laiba_Saleem_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(personalInfo.fullName.toUpperCase(), margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text(personalInfo.title, margin, y);
  y += 5;

  // Contact info line (NO phone number per privacy requirement)
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactText = `${personalInfo.location}   |   ${personalInfo.email}   |   github.com/laiba09Saleem   |   linkedin.com/in/laiba-saleem-4b8541248`;
  doc.text(contactText, margin, y);
  y += 4;

  // Subtle divider line
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Helper for Section Headers
  const renderSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;

    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + 26, y);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin + 26, y, pageWidth - margin, y);
    y += 5;
  };

  // --- PROFESSIONAL SUMMARY ---
  renderSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(personalInfo.bio, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 3;

  // --- TECHNICAL SKILLS ---
  renderSectionHeader('Technical Skills');
  doc.setFontSize(8.5);
  skillsData.forEach(cat => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`${cat.title}: `, margin, y);
    const titleWidth = doc.getTextWidth(`${cat.title}: `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const skillsStr = cat.skills.join(', ');
    const skillsLines = doc.splitTextToSize(skillsStr, contentWidth - titleWidth);
    doc.text(skillsLines, margin + titleWidth, y);
    y += skillsLines.length * 4.2 + 0.5;
  });
  y += 3;

  // --- PROFESSIONAL EXPERIENCE ---
  renderSectionHeader('Professional Experience');
  experiencesData.forEach(exp => {
    checkPageBreak(18);
    // Role and Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, pageWidth - margin - periodWidth, y);
    y += 4;

    // Company & Location
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text(exp.company, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    const locText = exp.isRemote ? `${exp.location} (Remote)` : exp.location;
    const locWidth = doc.getTextWidth(locText);
    doc.text(locText, pageWidth - margin - locWidth, y);
    y += 4;

    // Bullet points
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(8.5);
    exp.descriptionPoints.forEach(point => {
      checkPageBreak(8);
      const bulletLines = doc.splitTextToSize(`•  ${point}`, contentWidth);
      doc.text(bulletLines, margin, y);
      y += bulletLines.length * 3.8 + 1;
    });
    y += 2;
  });

  // --- KEY PROJECTS ---
  renderSectionHeader('Featured Engineering Projects');
  projectsData.forEach(proj => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.name, margin, y);

    // Category tag
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235);
    const catWidth = doc.getTextWidth(proj.categoryTag);
    doc.text(proj.categoryTag, pageWidth - margin - catWidth, y);
    y += 4;

    // Tech summary line
    const techArray: string[] = [];
    if (proj.techStack.backend) techArray.push(...proj.techStack.backend);
    if (proj.techStack.frontend) techArray.push(...proj.techStack.frontend);
    if (proj.techStack.aiData) techArray.push(...proj.techStack.aiData);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`Tech Stack: ${techArray.join(' · ')}`, margin, y);
    y += 3.8;

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.8 + 2;
  });

  // --- EDUCATION ---
  renderSectionHeader('Education');
  checkPageBreak(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(educationData.degree, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  const gradWidth = doc.getTextWidth(educationData.graduationDate);
  doc.text(educationData.graduationDate, pageWidth - margin - gradWidth, y);
  y += 4;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(`${educationData.institution}   |   ${educationData.location}   |   Cumulative GPA: ${educationData.gpa}`, margin, y);
  y += 4;

  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Relevant Coursework: ${educationData.coursework.join(', ')}`, margin, y);
  y += 6;

  // --- CERTIFICATIONS ---
  renderSectionHeader('Certifications & Verified Credentials');
  certificatesData.forEach(cert => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`•  ${cert.title}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    const dateWidth = doc.getTextWidth(cert.issueDate);
    doc.text(cert.issueDate, pageWidth - margin - dateWidth, y);
    y += 3.8;

    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`    ${cert.organization} (${cert.type})`, margin, y);
    y += 4;
  });

  // Save the PDF
  doc.save('Laiba_Saleem_CV.pdf');
}
