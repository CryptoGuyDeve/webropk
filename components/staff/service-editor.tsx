"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { updateServiceContent } from "@/actions/service";
import { toast } from "sonner";
import { Save, Plus, Trash2 } from "lucide-react";

interface Package {
    name: string;
    price: string;
    description: string;
    features: string[];
}

interface ServiceEditorProps {
    slug: string;
    initialData?: {
        heroTitle: string;
        heroSubtitle: string;
        packages: Package[];
    } | null;
}

export function ServiceEditor({ slug, initialData }: ServiceEditorProps) {
    const [loading, setLoading] = useState(false);
    const [heroTitle, setHeroTitle] = useState(initialData?.heroTitle || "");
    const [heroSubtitle, setHeroSubtitle] = useState(initialData?.heroSubtitle || "");

    const defaultPackage: Package = { name: "New Package", price: "$0", description: "", features: ["Feature 1"] };
    const [packages, setPackages] = useState<Package[]>(initialData?.packages || [defaultPackage, defaultPackage, defaultPackage]);

    const handlePackageChange = (index: number, field: keyof Package, value: any) => {
        const newPackages = [...packages];
        newPackages[index] = { ...newPackages[index], [field]: value };
        setPackages(newPackages);
    };

    const handleFeatureChange = (pkgIndex: number, featIndex: number, value: string) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].features[featIndex] = value;
        setPackages(newPackages);
    };

    const addFeature = (pkgIndex: number) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].features.push("");
        setPackages(newPackages);
    };

    const removeFeature = (pkgIndex: number, featIndex: number) => {
        const newPackages = [...packages];
        newPackages[pkgIndex].features.splice(featIndex, 1);
        setPackages(newPackages);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append("heroTitle", heroTitle);
        formData.append("heroSubtitle", heroSubtitle);
        formData.append("packages", JSON.stringify(packages));

        try {
            const result = await updateServiceContent(slug, formData);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Changes saved publically!");
            }
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white dark:bg-zinc-900 p-6 rounded-lg border shadow-sm sticky top-4 z-10">
                <div>
                    <h2 className="text-lg font-semibold">Editing: {slug}</h2>
                    <p className="text-sm text-muted-foreground">Changes are live immediately after saving.</p>
                </div>
                <Button onClick={handleSubmit} disabled={loading} className="gap-2 bg-green-600 hover:bg-green-700">
                    <Save className="w-4 h-4" /> {loading ? "Saving..." : "Publish Changes"}
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} placeholder="e.g. Build Your Dream Store" />
                    </div>
                    <div className="space-y-2">
                        <Label>Subtitle</Label>
                        <Textarea value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} placeholder="e.g. We craft premium Shopify experiences..." />
                    </div>
                </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
                {packages.map((pkg, i) => (
                    <Card key={i} className="relative">
                        <div className="absolute top-4 right-4 bg-zinc-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-zinc-500">
                            {i + 1}
                        </div>
                        <CardHeader>
                            <CardTitle>Package {i + 1}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Name</Label>
                                <Input value={pkg.name} onChange={(e) => handlePackageChange(i, "name", e.target.value)} placeholder="e.g. Basic" />
                            </div>
                            <div className="space-y-2">
                                <Label>Price String</Label>
                                <Input value={pkg.price} onChange={(e) => handlePackageChange(i, "price", e.target.value)} placeholder="e.g. $100 or $500/mo" />
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Input value={pkg.description} onChange={(e) => handlePackageChange(i, "description", e.target.value)} placeholder="Brief tagline" />
                            </div>

                            <div className="space-y-2">
                                <Label>Features</Label>
                                {pkg.features.map((feat, fIndex) => (
                                    <div key={fIndex} className="flex gap-2">
                                        <Input value={feat} onChange={(e) => handleFeatureChange(i, fIndex, e.target.value)} />
                                        <Button size="icon" variant="ghost" className="text-red-500 h-10 w-10" onClick={() => removeFeature(i, fIndex)}>
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" onClick={() => addFeature(i)} className="w-full gap-2 mt-2">
                                    <Plus className="w-3 h-3" /> Add Feature
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
