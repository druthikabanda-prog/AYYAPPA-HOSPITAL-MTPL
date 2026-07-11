import { Activity, Droplets, Thermometer, ShieldAlert, Bug, Flame, HeartPulse, Wind, AlertCircle, Eye, Accessibility, ActivitySquare } from 'lucide-react';

export const servicesData = [
  {
    id: 'blood-pressure',
    title: 'Blood Pressure & Hypertension',
    description: 'Expert monitoring and management of high blood pressure to prevent cardiovascular complications.',
    icon: Activity,
    category: 'General Medicine'
  },
  {
    id: 'diabetes',
    title: 'Diabetes Management',
    description: 'Comprehensive care for blood sugar control, lifestyle adjustments, and medication.',
    icon: Droplets,
    category: 'General Medicine'
  },
  {
    id: 'thyroid',
    title: 'Thyroid Disorders',
    description: 'Diagnosis and treatment of hypothyroidism and hyperthyroidism.',
    icon: ActivitySquare,
    category: 'General Medicine'
  },
  {
    id: 'fever',
    title: 'Fever & Infections',
    description: 'Accurate diagnosis and rapid treatment for all types of unexplained fevers.',
    icon: Thermometer,
    category: 'Infectious Diseases'
  },
  {
    id: 'malaria-dengue',
    title: 'Malaria & Dengue',
    description: 'Specialized care for mosquito-borne diseases with close monitoring.',
    icon: Bug,
    category: 'Infectious Diseases'
  },
  {
    id: 'gastric',
    title: 'Gastric Problems',
    description: 'Relief from acidity, ulcers, indigestion, and other gastrointestinal issues.',
    icon: Flame,
    category: 'General Medicine'
  },
  {
    id: 'tuberculosis',
    title: 'Tuberculosis',
    description: 'Long-term care and medication management for TB patients.',
    icon: ShieldAlert,
    category: 'Infectious Diseases'
  },
  {
    id: 'asthma',
    title: 'Asthma & Allergies',
    description: 'Management of respiratory issues and allergic reactions for better breathing.',
    icon: Wind,
    category: 'General Medicine'
  },
  {
    id: 'liver',
    title: 'Liver Problems',
    description: 'Diagnosis and care for hepatic conditions including jaundice and liver dysfunction.',
    icon: HeartPulse,
    category: 'General Medicine'
  },
  {
    id: 'neurology',
    title: 'Paralysis & Seizures',
    description: 'Evaluation and ongoing care for paralysis, fits, and seizure disorders.',
    icon: Accessibility,
    category: 'Neurology & Care'
  },
  {
    id: 'kidney',
    title: 'Kidney Problems',
    description: 'Management of renal issues and prevention of kidney failure.',
    icon: Activity,
    category: 'General Medicine'
  },
  {
    id: 'migraine',
    title: 'Migraine & Headache',
    description: 'Effective treatment plans for chronic headaches and severe migraines.',
    icon: Eye,
    category: 'Neurology & Care'
  },
  {
    id: 'snake-bite',
    title: 'Snake Bite Care',
    description: 'Immediate emergency anti-venom treatment and critical observation.',
    icon: AlertCircle,
    category: 'Emergency Care'
  },
  {
    id: 'poisoning',
    title: 'Poisoning Cases',
    description: 'Urgent medical intervention for accidental or intentional poisoning.',
    icon: AlertCircle,
    category: 'Emergency Care'
  }
];
