from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "vladimir-baryshev-cv.pdf"
PHOTO = ROOT / "assets" / "vladimir-baryshev-photo.jpg"

GREEN = colors.HexColor("#3E4D39")
GOLD = colors.HexColor("#A77B42")
INK = colors.HexColor("#191C17")
MUTED = colors.HexColor("#62665B")
PALE = colors.HexColor("#E8E5D7")
LINK = colors.HexColor("#315F83")


def register_fonts():
    font_dir = Path("C:/Windows/Fonts")
    pdfmetrics.registerFont(TTFont("SegoeUI", font_dir / "segoeui.ttf"))
    pdfmetrics.registerFont(TTFont("SegoeUI-Bold", font_dir / "segoeuib.ttf"))
    pdfmetrics.registerFont(TTFont("SegoeUI-Italic", font_dir / "segoeuii.ttf"))


def paragraph(text, style):
    return Paragraph(text, style)


def section(title, styles):
    return [
        Spacer(1, 4),
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.7, color=PALE, spaceBefore=2, spaceAfter=5),
    ]


def entry(title, meta, body, styles):
    return KeepTogether(
        [
            Paragraph(title, styles["entry_title"]),
            Paragraph(meta, styles["meta"]),
            Paragraph(body, styles["body"]),
            Spacer(1, 5),
        ]
    )


def bullet(text, styles):
    return Paragraph(f"<bullet>&bull;</bullet>{text}", styles["bullet"])


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(PALE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 13 * mm, A4[0] - 18 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("SegoeUI", 7.5)
    canvas.drawString(18 * mm, 8.5 * mm, "Vladimir Baryshev | Curriculum Vitae")
    canvas.drawRightString(A4[0] - 18 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build():
    register_fonts()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=14 * mm,
        bottomMargin=18 * mm,
        title="Vladimir Baryshev - Curriculum Vitae",
        author="Vladimir Baryshev",
        subject="Neural decoding, neurotechnology, and biomedical AI",
    )

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="SegoeUI-Bold",
            fontSize=23,
            leading=26,
            textColor=INK,
            spaceAfter=3,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="SegoeUI",
            fontSize=9.6,
            leading=13,
            textColor=GREEN,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="SegoeUI",
            fontSize=8.2,
            leading=11,
            textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="SegoeUI-Bold",
            fontSize=10.5,
            leading=12,
            textColor=GREEN,
            tracking=0.5,
            keepWithNext=True,
        ),
        "entry_title": ParagraphStyle(
            "EntryTitle",
            parent=base["Normal"],
            fontName="SegoeUI-Bold",
            fontSize=10,
            leading=12.5,
            textColor=INK,
            keepWithNext=True,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="SegoeUI-Italic",
            fontSize=8.3,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=2,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="SegoeUI",
            fontSize=8.8,
            leading=11.8,
            textColor=INK,
            alignment=TA_LEFT,
        ),
        "summary": ParagraphStyle(
            "Summary",
            parent=base["Normal"],
            fontName="SegoeUI",
            fontSize=9.2,
            leading=12.7,
            textColor=INK,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="SegoeUI",
            fontSize=8.7,
            leading=11.6,
            textColor=INK,
            leftIndent=11,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceAfter=2,
        ),
    }

    contact = (
        f'<link href="mailto:nikaabigail314@gmail.com" color="{LINK.hexval()}">Email</link>'
        " &nbsp;|&nbsp; "
        f'<link href="https://www.linkedin.com/in/vladimir-baryshev-45a9a2369/" color="{LINK.hexval()}">LinkedIn</link>'
        " &nbsp;|&nbsp; "
        f'<link href="https://github.com/nikaabigail" color="{LINK.hexval()}">GitHub</link>'
        " &nbsp;|&nbsp; "
        f'<link href="https://orcid.org/0009-0007-3946-6229" color="{LINK.hexval()}">ORCID</link>'
    )
    header_left = [
        Paragraph("Vladimir Vladimirovich Baryshev", styles["name"]),
        Paragraph(
            "Neural decoding | Neurotechnology | Biomedical AI | Computer vision",
            styles["headline"],
        ),
        Paragraph(contact, styles["contact"]),
    ]
    photo = Image(str(PHOTO), width=28 * mm, height=28 * mm, kind="proportional")
    header = Table([[header_left, photo]], colWidths=[doc.width - 32 * mm, 32 * mm])
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    story = [header, HRFlowable(width="100%", thickness=1.2, color=GOLD, spaceBefore=5, spaceAfter=5)]

    story += section("Profile", styles)
    story.append(
        Paragraph(
            "Neurotechnology MSc student and Research Collaborator focused on decoding information from neural signals with machine learning. Experience spans intracranial ECoG speech decoding, EEG classification, computer vision, and biomedical image analysis, with hands-on work across research design, data processing, neural-network training, and scientific writing.",
            styles["summary"],
        )
    )

    story += section("Research and professional experience", styles)
    story.append(
        entry(
            "Research Collaborator - HSE University, Centre for Bioelectric Interfaces",
            "Part-time, remote | Moscow, Russia | Jun 2026 - Present",
            "Work on intracranial speech decoding from human electrocorticography (ECoG). Build and test neural-decoding approaches; preliminary results improve on the group's previous ECoG speech-decoding benchmark.",
            styles,
        )
    )
    story.append(
        entry(
            "Independent ML Developer / Researcher",
            "Self-employed | Apr 2026 - Present",
            "Develop research projects in medical image segmentation and EEG classification, including a pelvic CT segmentation support system and an EEGNet classifier on JapanDataset.",
            styles,
        )
    )
    story.append(
        entry(
            "Research Assistant / Intern - Skolkovo Institute of Science and Technology, Neurocenter",
            "Research Assistant, part-time: Nov 2025 - Apr 2026 | Intern: Sep 2025 - Nov 2025",
            "Performed neural-data analysis and built Python and computer-vision workflows for neuroscience research.",
            styles,
        )
    )

    story += section("Education", styles)
    story.append(
        entry(
            "MSc, Neurotechnology with the Basics of Biomaterials Science",
            "Sirius University, Sochi | In progress",
            "Master's thesis: spatiotemporal neuromodulation and biomimetic neurointerfaces. Developing an adaptive closed-loop neuromodulation approach for personalized neurorehabilitation.",
            styles,
        )
    )
    story.append(
        entry(
            "BSc, General Biology - Molecular Biology and Genetics",
            "North-Caucasus Federal University, Stavropol | GPA 4.35",
            "Developed software for morphological processing of histological slice images and object segmentation; work supported by Russian Science Foundation project 23-71-10013.",
            styles,
        )
    )

    story += section("Publication", styles)
    story.append(
        Paragraph(
            "Lyakhov P. A., Lyakhova U. A., Baboshina V. A., <b>Baryshev V. V.</b>, Nagornov N. N. "
            "<i>Detection of attention state in children with autism spectrum disorder based on neural network classification of electroencephalograms.</i> "
            "Vestnik of Saint Petersburg University. Applied Mathematics. Computer Science. Control Processes, 2025, 21(1), 92-111. Q3 Scopus. "
            f'<link href="https://doi.org/10.21638/spbu10.2025.107" color="{LINK.hexval()}">DOI</link>',
            styles["body"],
        )
    )

    story.append(PageBreak())

    story += section("Selected projects", styles)
    story.append(
        entry(
            "Attention-state detection in children with autism spectrum disorder",
            "EEG classification | Published",
            "Led the full research cycle from problem definition and literature review to EEG preprocessing, neural-network training, collaboration with medical institutions, and paper writing.",
            styles,
        )
    )
    story.append(
        entry(
            "Pelvic CT segmentation support system",
            "3D medical imaging | In progress",
            "Build an ML-based clinical decision-support prototype for segmentation of pelvic bones and lower limbs. "
            f'<link href="https://github.com/nikaabigail/CT-Pelvis-3D-Unet" color="{LINK.hexval()}">GitHub</link>',
            styles,
        )
    )
    story.append(
        entry(
            "EEGNet classifier on JapanDataset",
            "EEG deep learning | In progress",
            "Develop and evaluate an EEG classifier based on the EEGNet architecture. "
            f'<link href="https://github.com/nikaabigail/EEGNet_JapanDataset1" color="{LINK.hexval()}">GitHub</link>',
            styles,
        )
    )
    story.append(
        entry(
            "Histological slice processing software",
            "Python desktop application | Completed",
            "Built an end-to-end image-processing application for color correction, channel normalization, threshold binarization, and morphological operations using OpenCV, NumPy, Matplotlib, and PyQt.",
            styles,
        )
    )

    story += section("Technical skills", styles)
    story.append(bullet("<b>Programming:</b> Python; basic Git and Linux", styles))
    story.append(bullet("<b>ML and scientific computing:</b> PyTorch, NumPy, MNE, Matplotlib", styles))
    story.append(bullet("<b>Neural and biomedical data:</b> ECoG, EEG, MRI, CT, neural decoding, signal preprocessing", styles))
    story.append(bullet("<b>Computer vision:</b> OpenCV, 3D U-Net, nnU-Net, YOLO, SAM, DeepLabCut", styles))
    story.append(bullet("<b>Application development:</b> PyQt", styles))

    story += section("Selected training", styles)
    story.append(bullet("Neuromatch Academy - Computational Neuroscience, 2025", styles))
    story.append(bullet("New Generation Neurointerfaces, HSE University, 2025", styles))
    story.append(bullet("HSE Brain Research School, 2024", styles))
    story.append(bullet("Computational Neuroscience, University of Washington (Coursera)", styles))
    story.append(bullet("Neuroscience and Neuroimaging Specialization, Johns Hopkins University (Coursera)", styles))

    story += section("Science communication and languages", styles)
    story.append(
        Paragraph(
            "Staff science writer at Science Mail with more than 800 popular-science articles across neuroscience, genetics, physics, artificial intelligence, and biomedicine.",
            styles["body"],
        )
    )
    story.append(Spacer(1, 4))
    story.append(bullet("<b>Russian:</b> native", styles))
    story.append(bullet("<b>English:</b> B2 (intermediate-upper intermediate)", styles))

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT)


if __name__ == "__main__":
    build()
